import 'package:flutter/material.dart';

class DividerWithOr extends StatelessWidget {
  const DividerWithOr({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Row(
        children: <Widget>[
          Expanded(
            child: Divider(
              thickness: 1,
              color: Colors.grey[400],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Text(
              "or",
              style: TextStyle(
                color: Colors.grey[600],
                
              ),
            ),
          ),
          Expanded(
            child: Divider(
              thickness: 1,
              color: Colors.grey[400],
            ),
          ),
        ],
      ),
    );
  }
}