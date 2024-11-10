import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/lab_report_card.dart';

class LabResults extends StatelessWidget {
  const LabResults({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        LabReportCard(),
        SizedBox(
          height: 20,
        ),
        LabReportCard(),
        SizedBox(
          height: 20,
        ),
        LabReportCard(),
        SizedBox(
          height: 20,
        ),
        LabReportCard(),
      ],
    );
  }
}
