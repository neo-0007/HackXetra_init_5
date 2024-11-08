import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_button.dart';
import 'package:google_fonts/google_fonts.dart';

class UserSelectionPage extends StatefulWidget {
  const UserSelectionPage({super.key});

  @override
  State<UserSelectionPage> createState() => _UserSelectionPageState();
}

class _UserSelectionPageState extends State<UserSelectionPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal:30,vertical: 40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            //Product Logo
            //Welcome text
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children:[ 
                Text(
                'Welcome',
                style: GoogleFonts.poppins(
                    
                    fontSize: 27.25, fontWeight: FontWeight.bold, color: Colors.black),
              ),]
            ),
            const SizedBox(height: 40),
            //User button
            AuthButton(buttonText: 'Continue as User', onPressed: (){}),
            const SizedBox(height: 30),
            //Doctor button
            AuthButton(buttonText: 'Continue as Doctor', onPressed: (){}),
            const SizedBox(height: 30),
            //Pharma button
            AuthButton(buttonText: 'Continue as Pharma', onPressed: (){}),
          ],
        ),
      ),
    );
  }
}
