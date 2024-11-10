import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/services/health_record_services.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_button.dart';
import 'package:google_fonts/google_fonts.dart';

class AddRecordsPage extends StatefulWidget {
  const AddRecordsPage({super.key});

  @override
  State<AddRecordsPage> createState() => _AddRecordsPageState();
}

class _AddRecordsPageState extends State<AddRecordsPage> {
  HealthRecordServices healthRecordServices = HealthRecordServices();
  bool isLoading = false;
  PlatformFile? file;

  Future<void> selectFile() async {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['jpeg', 'jpg', 'png'],
    );
    if (result != null) {
      setState(() {
        file = result.files.first;
      });
    }
  }

  Future<void> addRecord() async {
    if (file == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please select a file first'),
        ),
      );
      return;
    }

    setState(() {
      isLoading = true;
    });

    final res = await healthRecordServices.uploadPrescription(file!);

    setState(() {
      isLoading = false;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(res == 'Success' ? 'Record added successfully' : 'Failed to add record: $res'),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'Add Record',
                  style: GoogleFonts.poppins(
                      fontSize: 27.25,
                      fontWeight: FontWeight.bold,
                      color: Colors.black),
                ),
              ],
            ),
            const SizedBox(
              height: 30,
            ),
            isLoading
                ? const Center(
                    child: CircularProgressIndicator(),
                  )
                : Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: InkWell(
                      onTap: selectFile,
                      child: Container(
                        height: 250,
                        width: MediaQuery.of(context).size.width - 100,
                        decoration: BoxDecoration(
                          color: const Color.fromARGB(20, 0, 98, 255),
                          border: Border.all(width: 2, color: Colors.grey),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Center(
                          child: file != null
                              ? Text(
                                  file!.name,
                                  style: const TextStyle(color: Colors.black54),
                                )
                              : const Icon(Icons.note_add_rounded),
                        ),
                      ),
                    ),
                  ),
            const SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 30,
              width: MediaQuery.of(context).size.width - 90,
              child: HealthRecordButton(
                buttonText: 'Upload',
                onPressed: addRecord,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
