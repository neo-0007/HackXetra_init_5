import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_big_text.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_button.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_form_field.dart';
import 'package:frontend_mobile/features/auth/view/widgets/divider_with_or.dart';
import 'package:frontend_mobile/routes/route_constants.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

class SignupPage extends StatefulWidget {
  const SignupPage({super.key});

  @override
  State<SignupPage> createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  TextEditingController firstNameController = TextEditingController();
  TextEditingController lastNameController = TextEditingController();
  TextEditingController dobController = TextEditingController();
  TextEditingController genderController = TextEditingController();
  TextEditingController phoneController = TextEditingController();
  TextEditingController address1Controller = TextEditingController();
  TextEditingController address2Controller = TextEditingController();
  TextEditingController cityController = TextEditingController();
  TextEditingController districtController = TextEditingController();
  TextEditingController stateController = TextEditingController();
  TextEditingController countryController = TextEditingController();
  TextEditingController zipController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController confirmPasswordController = TextEditingController();
  TextEditingController emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                //Signup text
                const AuthBigText(
                  text: 'Sign Up',
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
                const SizedBox(
                  height: 20,
                ),
                //Name field
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                          controller: firstNameController,
                          topText: 'First Name',
                          hintText: 'First Name',
                          hintIcon: Icons.person),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: AuthFormField(
                        controller: lastNameController,
                        hintText: 'Last Name',
                        hintIcon: Icons.person,
                        topText: 'Last Name',
                      ),
                    ),
                  ],
                ),
                //Email field
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                        controller: dobController,
                        hintText: 'mm/dd/yyyy',
                        hintIcon: Icons.calendar_month,
                        topText: 'Date-of-birth',
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                        child: AuthFormField(
                            controller: genderController, hintText: 'Gender'))
                  ],
                ),
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                        controller: phoneController,
                        hintText: 'Phone',
                        hintIcon: Icons.phone,
                        topText: 'Phone',
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: AuthFormField(
                        controller: emailController,
                        hintText: 'Email',
                        hintIcon: Icons.mail,
                        topText: 'Email',
                      ),
                    ),
                  ],
                ),
                AuthFormField(
                  controller: address1Controller,
                  hintText: 'Address 1',
                  hintIcon: Icons.location_on,
                  topText: 'Address 1',
                ),
                const SizedBox(
                  width: 20,
                ),
                AuthFormField(
                  controller: address2Controller,
                  hintText: 'Address 2',
                  hintIcon: Icons.location_on,
                  topText: 'Address 2',
                ),
                //Phone field
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                        controller: cityController,
                        hintText: 'City',
                        topText: 'City',
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: AuthFormField(
                        controller: zipController,
                        hintText: 'Pin Code',
                        topText: 'Pin Code',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                        controller: districtController,
                        hintText: 'District',
                        topText: 'District',
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: AuthFormField(
                        controller: countryController,
                        hintText: 'State',
                        topText: 'State',
                      ),
                    ),
                  ],
                ),
                AuthFormField(
                    controller: countryController,
                    hintText: 'Country',
                    ),
                Row(
                  children: [
                    Expanded(
                      child: AuthFormField(
                        controller: passwordController,
                        hintText: 'Password',
                        hintIcon: Icons.lock,
                        obscureText: true,
                        topText: 'Password',
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    Expanded(
                      child: AuthFormField(
                        controller: confirmPasswordController,
                        hintText: 'Confirm Password',
                        hintIcon: Icons.lock,
                        obscureText: true,
                        topText: 'Confirm Password',
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 30,
                ),
                AuthButton(buttonText: 'Signup', onPressed: () {}),
                const SizedBox(
                  height: 20,
                ),
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
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 30,
                ),
                //Signup button and text
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'Already have a Account? ',
                      style:
                          TextStyle(fontWeight: FontWeight.w500, fontSize: 14),
                    ),
                    InkWell(
                      onTap:()=>context.goNamed(RouteConstants.login),
                      child: const Text(
                        'Signin',
                        style: TextStyle(
                            fontWeight: FontWeight.w500,
                            color: Colors.blue,
                            fontSize: 14),
                      ),
                    ),
                  ],
                ),
              ]),
        ),
      ),
    );
  }
}
