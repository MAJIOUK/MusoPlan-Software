# Prepared by: Rasheed Adewale

## Introduction
This test plan will outline the specifi tests to be performed to validate the MusoPlan software robustness. The different test cases with the description are stated below.

## Scope
The test implementation will be carried out using jest testing tool with varied inputs spanning bases cases, edge cases, boundary values and corner cases.

The proposed test plan are as follows:

**Identifier:** Test 1
**Test Case:** Create musician functionality 
**Precondition:** User must be able to use the CLI to create a musician profile.

**Input values:** 
    - Enter musician name (between 3 to 30 characters): 'Sandy'
    - Enter musician's years of playing: '2'
    - Enter musician's hourly rate (should be above 50 AUD): '55' 
    - Enter the type of musician: 'bassist'

**Execution steps:** 
    - start software by running "MusoPlan.js" from the CLI.
    - choose option 1 from the menu provided
    - follow the prompt to enter input values.

**Output values:**
    - Musician created successfully.
        musician_name: 'sandy'
        instrument: 'bassist'
        career_length: 2
        hourly_Rate: 55
        musician_introduction: 'sandy ia a bassist'
        interesting_fact: 'Everyone loves a bassist'
        

**Identifier:** Test 2
**Test Case:** Create a troupe functionality 
**Precondition:** User must be able to use the CLI to create a troupe profile.

**Input values:** 
    - Enter troupe name (between 3 to 30 characters): 'trooper1'
    - Enter booking duration (between 0.5 to 3 hours): '2'
    - type in a genre from the list (rock, jazz, pop): 'pop' 
   
**Execution steps:** 
    - start software by running "MusoPlan.js" from the CLI.
    - choose option 2 from the menu provided
    - follow the prompt to enter input values.

**Output values:**
    - Musician created successfully.
        troupe_name: 'trooper1'
        troupe_duration: 2
        music_genre: 'pop'


**Identifier:** Test 3
**Test Case:** Number of characters in musician name limit (3-30 characters cap) 
**Precondition:** User must be able to use the CLI to enter musician name.

**Input values:** 
    - {'sa', 'san', 'sandy', 'sandilicious'}
   
**Execution steps:** 
    - start software by running "MusoPlan.js" from the CLI.
    - choose option 1 from the menu provided
    - follow the prompt to enter input values.

**Output values:**
    - {'Enter troupe name (between 3 to 30 characters):', 'san', 'sandy', 'sandilicious''}


**Identifier:** Test 4
**Test Case:** Musician's hourly rate must be above $50.00 
**Precondition:** User must be able to use the CLI to enter hourly rate.

**Input values:** 
    - {49, 50, 51, 55}
   
**Execution steps:** 
    - start software by running "MusoPlan.js" from the CLI.
    - choose option 1 from the menu provided
    - follow the prompt to enter input values.

**Output values:**
    - {Enter musician's hourly rate (should be above 50 AUD):, Enter musician's hourly rate (should be above 50 AUD):, 51, 55}


**Identifier:** Test 5
**Test Case:** Type of musician
**Precondition:** User must be able to use the CLI to enter the musician type from the options provided -bassist, guitarist, percussionist or flautist.

**Input values:** 
    - {'pianist', 'saxophonist', 'bassist', 'guitarist'}
   
**Execution steps:** 
    - start software by running "MusoPlan.js" from the CLI.
    - choose option 1 from the menu provided
    - follow the prompt to enter input values.

**Output values:**
    - {'Enter the type of musician: ', 'Enter the type of musician: ', 'bassist', 'guitarist'}
       
    