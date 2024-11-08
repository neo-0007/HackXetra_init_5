import 'package:flutter/material.dart';
import 'package:frontend_mobile/features/auth/view/screens/login_page.dart';
import 'package:frontend_mobile/features/auth/view/screens/signup_page.dart';
import 'package:frontend_mobile/features/auth/view/screens/user_selection_page.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/add_records_page.dart';
import 'package:frontend_mobile/features/healthrecords/view/screens/health_records_page.dart';
import 'package:frontend_mobile/routes/route_constants.dart';
import 'package:go_router/go_router.dart';

class AppRouter {
  GoRouter router = GoRouter(
    initialLocation: RouteConstants.userSelectionPage,
    routes: [
      GoRoute(
        name: RouteConstants.userSelectionPage,
        path: '/userSelectionPage',
        pageBuilder: (context, state) => const MaterialPage(
          child: UserSelectionPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.login,
        path: '/login',
        pageBuilder: (context, state) => const MaterialPage(
          child: LoginPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.signup,
        path: '/signup',
        pageBuilder: (context, state) => const MaterialPage(
          child: SignupPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.healthRecords,
        path: '/healthRecords',
        pageBuilder: (context, state) => const MaterialPage(
          child: HealthRecordsPage(),
        ),
      ),
      GoRoute(
        name: RouteConstants.addRecord,
        path: '/addRecord',
        pageBuilder: (context, state) => const MaterialPage(
          child: AddRecordsPage(),
        ),
      ),
    ],
  );
}
