import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_card.dart';
import 'package:google_fonts/google_fonts.dart';

class HealthRecordsPage extends StatelessWidget {
  const HealthRecordsPage({super.key});

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
              const HealthRecordCard(),
              const SizedBox(
                height: 20,
              ),
              const HealthRecordCard(),
              const SizedBox(
                height: 20,
              ),
              const HealthRecordCard(),
              const SizedBox(
                height: 20,
              ),
              const HealthRecordCard()
            ],
          ),
        ),
      ),
    );
  }
}
