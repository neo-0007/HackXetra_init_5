import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/screens/user_selection_page.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const UserSelectionPage(),
    );
  }
}