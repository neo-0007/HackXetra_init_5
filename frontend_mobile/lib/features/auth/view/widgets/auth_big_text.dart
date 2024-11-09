import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AuthBigText extends StatelessWidget {
  const AuthBigText({super.key, required this.text, this.fontSize=27.25, this.fontWeight=FontWeight.bold, this.mainAxisAlignment=MainAxisAlignment.start});

  final String text;
  final double fontSize;
  final FontWeight fontWeight;
  final MainAxisAlignment mainAxisAlignment;

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.start, children: [
      Text(
        text,
        style: GoogleFonts.poppins(
            fontSize: 27.25, fontWeight: FontWeight.bold, color: Colors.black),
      ),
    ]);
  }
}
