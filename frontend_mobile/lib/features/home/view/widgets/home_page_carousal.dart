import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class HomePageCarousal extends StatefulWidget {
  const HomePageCarousal({super.key});

  @override
  State<HomePageCarousal> createState() => _HomePageCarousalState();
}

class _HomePageCarousalState extends State<HomePageCarousal> {
  List<String> imageUrls = [
    "assets/images/image-1-hxetra.jpeg",
    "assets/images/image-2-hxtra.jpeg",
    "assets/images/image-3-hxtra.jpeg",
  ];

  int _currentIndex = 0; // To track the current slide

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Carousel Slider
        CarouselSlider(
          items: imageUrls.map((url) {
            return Builder(
              builder: (BuildContext context) {
                return Container(
                  width: MediaQuery.of(context).size.width,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(5.0), // Rounded corners
                    color: Colors.white, // Background color
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.1),
                        spreadRadius: 2,
                        blurRadius: 10,
                        offset: const Offset(0, 10),
                      ),
                    ],
                  ),
                  child: ClipRRect(
                    borderRadius:
                        BorderRadius.circular(5.0), // Rounded corners for image
                    child: Image.asset(
                      url,
                      fit: BoxFit.cover,
                    ),
                  ),
                );
              },
            );
          }).toList(),
          options: CarouselOptions(
            height: 200.0,
            autoPlay: true,
            enlargeCenterPage: true,
            viewportFraction: 0.9,
            onPageChanged: (index, reason) {
              setState(() {
                _currentIndex = index; // Update current index on page change
              });
            },
          ),
        ),
        const SizedBox(height: 10.0),
        // Dot Indicator
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: imageUrls.map(
            (url) {
              int index = imageUrls.indexOf(url);
              return Container(
                width: 8.0,
                height: 8.0,
                margin: const EdgeInsets.symmetric(horizontal: 4.0),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _currentIndex == index
                      ? Colors.black // Active dot color
                      : Colors.grey, // Inactive dot color
                ),
              );
            },
          ).toList(),
        ),
      ],
    );
  }
}
