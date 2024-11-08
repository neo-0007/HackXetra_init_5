import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/common/widgets/big_text.dart';
import 'package:frontend_mobile/features/common/widgets/small_text.dart';

class PrescriptionPage extends StatelessWidget {
  const PrescriptionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            BigText(text: 'Patient\'s Details',color: Color.fromARGB(255, 0, 98, 255),fontSize: 20,),
            SizedBox(
              height: 15,
            ),
            SmallText(text: 'Name: John Doe'),
            SizedBox(
              height: 7,
            ),
            SmallText(text: 'Age: 25'),
            SizedBox(
              height: 7,
            ),
            SmallText(text: 'Gender: M'),
            SizedBox(
              height: 7,
            ),
            SmallText(text: 'Date: 12/12/2021'),
            SizedBox(
              height: 40,
            ),
            BigText(text: 'Medicine Details'),
            SizedBox(
              height: 7,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SmallText(text: '1. Paracetamol'),
                SmallText(text: '1 Captule 3 times a day'),
              ],
            ),
                        SizedBox(
              height: 7,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SmallText(text: '1. Paracetamol'),
                SmallText(text: '1 Captule 3 times a day'),
              ],
            ),
                        SizedBox(
              height: 7,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SmallText(text: '1. Paracetamol'),
                SmallText(text: '1 Captule 3 times a day'),
              ],
            ),
                        SizedBox(
              height: 7,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                SmallText(text: '1. Paracetamol'),
                SmallText(text: '1 Captule 3 times a day'),
              ],
            ),
            SizedBox(
              height: 40,
            ),
            BigText(text: 'Instructions'),
            SizedBox(
              height: 7,
            ),
            SmallText(text: '1. Take the medicine after meals'),
            SizedBox(
              height: 7,
            ),
            SmallText(text: '2. Do not take the medicine empty stomach'),
            SizedBox(
              height: 40,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                SmallText(text: 'By Doctor\'s Name'),
              ],
            )
          ],
        ),
      ),
    );
  }
}
