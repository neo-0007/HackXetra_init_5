import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/common/widgets/big_text.dart';
import 'package:frontend_mobile/features/home/view/widgets/daily_dosage_container.dart';
import 'package:frontend_mobile/features/home/view/widgets/home_page_carousal.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Color.fromARGB(255, 232, 230, 230),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 30, vertical: 40),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 20,
              ),
              BigText(
                text: 'Prescriptrix',
                fontSize: 25,
                color: Color.fromARGB(255, 0, 89, 255),
              ),
              SizedBox(
                height: 20,
              ),
              HomePageCarousal(),
              SizedBox(
                height: 40,
              ),
              BigText(text: 'Daily Dosages'),
              SizedBox(
                height: 10,
              ),
              DailyDosageContainer(),
              SizedBox(
                height: 5,
              ),
              DailyDosageContainer(),
              SizedBox(
                height: 5,
              ),
              DailyDosageContainer(),
            ],
          ),
        ),
      ),
    );
  }
}
