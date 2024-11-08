import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_big_text.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_button.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_form_field.dart';
import 'package:frontend_mobile/features/auth/view/widgets/divider_with_or.dart';
import 'package:google_fonts/google_fonts.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 30, vertical: 40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            //Login text
            const AuthBigText(text: 'Log In'),
            const SizedBox(height: 20),
            //Email field
            AuthFormField(
              controller: emailController,
              hintText: 'Email',
              hintIcon: Icons.mail,
            ),
            // const SizedBox(height: 20),
            //Password field
            AuthFormField(
              controller: passwordController,
              hintText: 'Password',
              hintIcon: Icons.lock,
            ),
            const SizedBox(
              height: 30,
            ),
            //Login button
            AuthButton(buttonText: 'Login', onPressed: () {}),
            const SizedBox(
              height: 20,
            ),
            //Forgot password button
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                InkWell(
                  child: Text(
                    'Forgot Password?',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: const Color.fromARGB(188, 0, 98, 255),
                    ),
                  ),
                )
              ],
            ),
            const SizedBox(
              height: 30,
            ),
            //or line
            const DividerWithOr(),
            const SizedBox(
              height: 30,
            ),
            //google and phone login buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                    child: AuthButton(
                  buttonText: 'Phone',
                  onPressed: () {},
                  buttonColor: Colors.white,
                  buttonTextColor: Colors.black,
                )),
                const SizedBox(
                  width: 20,
                ),
                Expanded(
                    child: AuthButton(
                  buttonText: 'Google',
                  onPressed: () {},
                  buttonColor: Colors.white,
                  buttonTextColor: Colors.black,
                )),
              ],
            ),
            SizedBox(
              height: 30,
            ),
            //Signup button and text
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'Dont have a Account? ',
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 14),
                ),
                InkWell(
                  onTap: () {},
                  child: const Text(
                    'SignUp',
                    style: TextStyle(
                        fontWeight: FontWeight.w500,
                        color: Colors.blue,
                        fontSize: 14),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
