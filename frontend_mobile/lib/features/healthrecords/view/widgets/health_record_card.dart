import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_button.dart';
import 'package:google_fonts/google_fonts.dart';

class HealthRecordCard extends StatelessWidget {
  const HealthRecordCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        height: 150,
        width: double.infinity,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Record Title',
                style: GoogleFonts.poppins(
                    fontSize: 17.25,
                    fontWeight: FontWeight.w600,
                    color: Colors.black),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                'Record Description',
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
                  HealthRecordButton(buttonText: 'Digital Record',onPressed: (){},),
                  const SizedBox(width: 30,),
                  HealthRecordButton(buttonText: 'Original Prescription',onPressed: (){},buttonColor: Colors.green,)
                ],
              )
            ],
          ),
        ));
  }
}
