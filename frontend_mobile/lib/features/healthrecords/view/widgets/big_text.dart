import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class BigText extends StatelessWidget {
  const BigText({super.key, required this.text, this.color=Colors.black, this.fontSize=17});

  final String text;
  final Color color;
  final double fontSize;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: GoogleFonts.poppins(
          fontSize: fontSize, fontWeight: FontWeight.bold, color: color),
    );
  }
}
