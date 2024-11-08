import 'package:flutter/material.dart';
import 'package:frontend_mobile/routes/app_router.dart';

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final _myAppRouter = AppRouter();

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'My App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      routerDelegate: _myAppRouter.router.routerDelegate,
      routeInformationParser: _myAppRouter.router.routeInformationParser,
      routeInformationProvider: _myAppRouter.router.routeInformationProvider,
    );
  }
}