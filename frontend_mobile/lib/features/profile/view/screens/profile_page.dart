import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/services/auth_services.dart';
import 'package:frontend_mobile/features/auth/view/widgets/auth_button.dart';
import 'package:frontend_mobile/features/common/widgets/big_text.dart';
import 'package:frontend_mobile/features/profile/view/widgets/data_info_card.dart';
import 'package:frontend_mobile/features/profile/view/widgets/profile_card.dart';
import 'package:frontend_mobile/routes/route_constants.dart';
import 'package:go_router/go_router.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromARGB(255, 232, 230, 230),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
            child: Column(
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    BigText(
                      text: 'Profile',
                      fontSize: 30,
                    ),
                  ],
                ),
                const SizedBox(
                  height: 30,
                ),
                //Profile Text
                const ProfileCard(),
                //Profile card --> Profile photo , name , phone,mail, id
                const SizedBox(
                  height: 30,
                ),
                //Health Data --> Blood type, weight, height, age
                const Row(
                  children: [
                    Expanded(child: DataInfoCard(text: '8',subText: 'Prescriptions',bigTextColor: Colors.green,smallTextColor: Colors.black,)),
                    SizedBox(
                      width: 20,
                    ),
                    Expanded(child: DataInfoCard(text: '3',subText: 'Lab Reports',bigTextColor: Colors.blue,smallTextColor: Colors.black,)),
                  ],
                ),
                const SizedBox(
                  height: 100,
                ),
                AuthButton(buttonText: 'Logout', onPressed: (){
                AuthServices().clearToken();
                context.goNamed(RouteConstants.login);
                })
                //Logout button
              ],
            ),
          ),
        ));
  }
}
