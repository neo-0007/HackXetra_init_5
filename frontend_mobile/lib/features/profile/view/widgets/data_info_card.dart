import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/common/widgets/big_text.dart';
import 'package:frontend_mobile/features/common/widgets/small_text.dart';

class DataInfoCard extends StatelessWidget {
  const DataInfoCard({super.key, required this.text, required this.subText, required this.bigTextColor, required this.smallTextColor});

  final String text;
  final String subText;
  final Color bigTextColor;
  final Color smallTextColor;

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        height: 100,
        width: double.infinity,
        padding:const EdgeInsets.all(10),
        child: Column(
          children: [
            BigText(
              color: bigTextColor,
              text: text,
              fontSize: 40,
            ),
            SmallText(
              text: subText,
            )
          ],
        ));
  }
}
