import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AuthButton extends StatelessWidget {
  const AuthButton(
      {super.key,
      required this.buttonText,
      required this.onPressed,
      this.buttonColor= const Color.fromARGB(255, 0, 98, 255),this.buttonTextColor= Colors.white});

  final String buttonText;
  final void Function() onPressed;
  final Color buttonColor;
  final Color buttonTextColor ;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 50,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: buttonColor,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
        onPressed: onPressed,
        child: Text(
          buttonText,
          style: GoogleFonts.poppins(
              color: buttonTextColor, fontSize: 15, fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}
