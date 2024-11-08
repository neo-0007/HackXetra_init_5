import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class HealthRecordButton extends StatelessWidget {
  const HealthRecordButton({
    super.key,
    required this.buttonText,
    this.buttonColor = const Color.fromARGB(255, 0, 98, 255),
    this.textColor = Colors.white,
    required this.onPressed,
  });

  final String buttonText;
  final Color buttonColor;
  final Color textColor;
  final void Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: buttonColor,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(5),
        ),
      ),
      onPressed: () {},
      child: Text(
        buttonText,
        style: GoogleFonts.poppins(
          color: textColor,
          fontSize: 15,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }
}
