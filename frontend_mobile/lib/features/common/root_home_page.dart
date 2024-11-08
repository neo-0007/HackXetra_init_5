import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/add_records_page.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/health_records_page.dart';

class RootHomePage extends StatefulWidget {
  const RootHomePage({super.key});

  @override
  State<RootHomePage> createState() => _RootHomePageState();
}

class _RootHomePageState extends State<RootHomePage> {
  int _selectedIndex = 0;

  List<Widget> screens = <Widget>[
    const HealthRecordsPage(),
    const AddRecordsPage()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.blueAccent,
        selectedItemColor: Colors.white,
        type: BottomNavigationBarType.fixed,
        currentIndex: _selectedIndex,
        onTap: (index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        items: const [
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.receipt_long),
          label: 'Records',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.add),
          label: 'Add Record',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.person),
          label: 'Profile',
        ),
      ]),
    );
  }
}
