import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/common/widgets/big_text.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body:Padding(padding:EdgeInsets.symmetric(horizontal: 30, vertical: 40),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          BigText(text: 'Prescriptrix')
        ],
      )
    )
    );
  }
}