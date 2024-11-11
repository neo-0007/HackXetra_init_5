import 'package:flutter/material.dart';

class PrescriptionPage extends StatelessWidget {
  const PrescriptionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding:const EdgeInsets.symmetric(
          horizontal: 30,
          vertical: 40,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.asset(
              'assets/images/e-prescription.png'
            )
          ],
        ),
      ),
    );
  }
}
