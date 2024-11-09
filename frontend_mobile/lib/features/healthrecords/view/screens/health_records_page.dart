import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/lab_results.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/prescriptions_history.dart';
import 'package:google_fonts/google_fonts.dart';

class HealthRecordsPage extends StatefulWidget {
  const HealthRecordsPage({super.key});

  @override
  State<HealthRecordsPage> createState() => _HealthRecordsPageState();
}

class _HealthRecordsPageState extends State<HealthRecordsPage> {
  String? _selectedFilter='Prescriptions';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 232, 230, 230),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Text(
                    'Health Records',
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
              Wrap(
                spacing: 8.0,
                children: <String>['Prescriptions', 'Lab Reports'].map(
                  (String name) {
                    return FilterChip(
                      label: Text(name),
                      selected: _selectedFilter == name,
                      onSelected: (bool selected) {
                        setState(
                          () {
                            _selectedFilter = name;
                          },
                        );
                      },
                    );
                  },
                ).toList(),
              ),
              const SizedBox(
                height: 20,
              ),
              _selectedFilter == 'Prescriptions'
                  ? const PrescriptionsHistory()
                  : const LabResults(),
            ],
          ),
        ),
      ),
    );
  }
}
