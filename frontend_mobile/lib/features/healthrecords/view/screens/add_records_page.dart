import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AddRecordsPage extends StatefulWidget {
  const AddRecordsPage({super.key});

  @override
  State<AddRecordsPage> createState() => _AddRecordsPageState();
}

class _AddRecordsPageState extends State<AddRecordsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Text(
            'Add Record',
            style: GoogleFonts.poppins(
                fontSize: 27.25,
                fontWeight: FontWeight.bold,
                color: Colors.black),
          ),
        ],
      ),
    );
  }
}
