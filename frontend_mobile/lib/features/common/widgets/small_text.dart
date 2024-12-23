import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SmallText extends StatelessWidget {
  const SmallText({super.key, required this.text,this.color=Colors.black});

  final String text;
final Color color;
  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: GoogleFonts.poppins(
          fontSize: 12, fontWeight: FontWeight.w500, color: Colors.black),
    );
  }
}
