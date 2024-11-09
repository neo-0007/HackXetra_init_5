import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/widgets/health_record_card.dart';

class PrescriptionsHistory extends StatelessWidget {
  const PrescriptionsHistory({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        HealthRecordCard(),
        SizedBox(
          height: 20,
        ),
        HealthRecordCard(),
        SizedBox(
          height: 20,
        ),
        HealthRecordCard(),
        SizedBox(
          height: 20,
        ),
        HealthRecordCard()
      ],
    );
  }
}
