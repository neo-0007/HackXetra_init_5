import 'package:flutter/material.dart';

class DailyDosageContainer extends StatelessWidget {
  const DailyDosageContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color.fromARGB(177, 255, 255, 255),
        border: Border.all(
          width: 1,
          color: const Color.fromARGB(120, 0, 0, 0))),
      
      height: 70,
      width: double.infinity,
    );
  }
}