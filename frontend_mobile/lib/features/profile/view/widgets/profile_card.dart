import 'package:flutter/material.dart';

class ProfileCard extends StatelessWidget {
  const ProfileCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Container( 
      color: Colors.white,
      height: 200,
      width: double.infinity,
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          CircleAvatar(
            radius: 50,
            child: Icon(Icons.person, size: 50,color: Colors.black,),
          ),
          SizedBox(width: 20),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Name: Hrishikesh Gohain'),
              Text('Phone: 9864846433'),
              Text('Mail: hrishikeshgohain123@gmail.com'),
              Text('ID: fgregerherhthrtjhtrjt'),
            ],
          ),
        ],
      ),
    );
  }
}
