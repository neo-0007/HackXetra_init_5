import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/models/prescription_model.dart';
import 'package:frontend_mobile/features/healthrecords/services/health_record_services.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_button.dart';
import 'package:google_fonts/google_fonts.dart';

class HealthRecordCard extends StatefulWidget {
  const HealthRecordCard({super.key, required this.recordTitle, required this.recordDescription, required this.recordId});

  final String recordTitle;
  final String recordDescription;
  final String recordId;

  @override
  State<HealthRecordCard> createState() => _HealthRecordCardState();
}

class _HealthRecordCardState extends State<HealthRecordCard> {

late Prescription prescription;
  bool isLoading = true; // Add loading state

  Future<void> getPrescription() async {
    try {
      final Prescription? fetchedPrescription = await HealthRecordServices().getPrescription(widget.recordId);
      setState(() {
        prescription = fetchedPrescription!;
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        isLoading = false;
      });
      print('Error fetching prescription: $e');
    }
  }

  @override
  void initState() {
    super.initState();
    getPrescription();
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Container(
        color: Colors.white,
        height: screenSize.width / 3.3,
        width: double.infinity,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.recordTitle,
                style: GoogleFonts.poppins(
                    fontSize: 17.25,
                    fontWeight: FontWeight.w600,
                    color: Colors.black),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                widget.recordDescription,
                style: GoogleFonts.poppins(
                    fontSize: 14.25,
                    fontWeight: FontWeight.w400,
                    color: Colors.black),
              ),
              const SizedBox(
                height: 15,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Expanded(
                    child: HealthRecordButton(
                      buttonText: 'Digital Record',
                      onPressed: () {
                      }
                    ),
                  ),
                  const SizedBox(
                    width: 30,
                  ),
                  Expanded(
                      child: HealthRecordButton(
                    buttonText: 'Original Prescription',
                    onPressed: () {},
                    buttonColor: Colors.green,
                  ))
                ],
              )
            ],
          ),
        ));
  }
}
