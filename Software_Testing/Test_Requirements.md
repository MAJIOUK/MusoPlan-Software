# Prepared by: Rasheed Adewale

## Introduction
This software test requirement document will outline the requirements to be tested and certified satisfactory before the developed software can be cleared as complete. The requirements to be tested and certified will be in compliance with those outlined in the terms of reference of the project and are oulined in the text below. Specifically, the testing will test the robustness and response of the software to varied inputs.

##Test Requirements
Manual testing will be used for the full suite of software testing to examine the coordination between the different integral parts (classes, function and methods) of the software.
The manual testing process involves supplying user input to the different menu options through the CLI and recording the actual output against the expected output. Where necessary, adjustments are made to the sofware if the test results are not satisfactory.

Automation testing will be restricted to testing just the musician and troupe classes with their associated methods. Unlike the manual testing, this testing will be carried out using the jest testing tool. The testing will be done by writing a test script for the different test cases. 

The test scenarios to be tested are outlined below:
1. Create a musician functionality.
    * Musician data requirements:
        - 3 to 30 characters for musician name.
        - years of playing should be non-negative.
        - hourly rate must be above $50.00
        - musician must be a flutist, bassist, percussionist or a guitarist.

2. Create a troupe functionality.
    * Musician data requirements:
        - 3 to 30 characters for troupe name.
        - no more than 5 musicians/troupe.
        - troupe genre must be from rock, jazz or pop.
        - minimum booking time for a troupe must be between 0.5 to 3 hours.

The final test report will be generated based on the above requirements.


