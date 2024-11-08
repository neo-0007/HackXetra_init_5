import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class PrescriptionPage extends StatelessWidget {
  const PrescriptionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
        child: Column(
          children: [
            Text('Patient\'s Details',style: GoogleFonts.poppins(
              fontSize: 27.25,
              fontWeight: FontWeight.bold,
              color: Colors.black
            ),),
          ],
        ),
      ),
    );
  }
}
