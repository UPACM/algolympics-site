---
title: "Mechanics"
---

# Eligibility of Participants

<br />
<hr />

A single proper team consists of two (2) to three (3) team members, each of which is an **_undergraduate_** student from a degree program at the sponsoring institution and is officially enrolled at the time of the contest. Alternates **WILL NOT** be allowed.

The contestants must be Filipino citizens, or officially enrolled at a sponsoring institution in the Philippines at the time of the contest.

Contestants will be required to present a valid school ID on the On-Site Final Round. Teams may have exactly one (1) coach to accompany them. There is no specific requirement for a coach to be eligible.

# Registration

<br />
<hr />

Teams must register through the [provided registration form](https://bit.ly/Algolympics2020Registration). Only 1 member of the team needs to submit the registration for the entire team.

**Ensure that you have access to the email(s) you provide** and that they are regularly checked, as further instructions for the Online Elimination Round as well as the On-Site Final Round will be communicated through the email provided.

The team must have a valid Codeforces accounts and a Codeforces team to register. Instructions for submitting these details will be communicated through the email you have provided in the registration form.

Note that:

- you may register for an account at https://codeforces.com/
- you must set your first name and last name in https://codeforces.com/settings/social to your real name before submitting or updating your registration.
- you may create a team at https://codeforces.com/teams/new and invite your team members
- you must join as a Codeforces team that only consists of your teammates
- you must not change your username or team name for the duration of the competition

There is no limit to the number of teams that may register per school, but the number of finalists may be limited to 3 (details seen below under "Invitation to the On-Site Final Round").

# Contest Structure

<br />
<hr />

The competition will be split into two rounds:

1. The Online Elimination Round
2. The On-Site Final Round
   Problem statements will be written in English and English only. Communication with judges (clarifications, etc.) will also be in English.

# Online Elimination Round

<br />
<hr />

Prior to the event, an Online Elimination Round will be held online on Codeforces. The Online Elimination Round will consist of at least ten (10) problems and will be open for eleven (11) days with the expectation that the contestants will solve the tasks during their free time.

It is forbidden to use someone else's code and to communicate about the problems with anyone apart from your own team members.

All programming languages supported by Codeforces is allowed for the Online Elimination Round. Note however that the languages available for the On-Site Final Round will be limited to C++, Java, and Python 3 (details seen below under "Contest Environment").

The team must use the same Codeforces team name and Codeforces account submitted to the Algolympics Team.

# Invitation to the On-Site Final Round

<br />
<hr />

The teams that:

- satisfy all eligibility criteria,
- have not been disqualified,
- have confirmed willingness and ability to attend the On-Site Final Round,
- are among the top three (3) from their school, and
- are among the top twenty (20) teams satisfying all criteria above

will be given invitations to the On-Site Final Round.

Once invited, the team must confirm their attendance by responding to the invitation on or before the specified deadline. Failing to confirm by the deadline will be considered equivalent to declining to attend.

Every time a team that has been invited is disqualified or declines to attend the On-Site Final Round, invites may be given to newly qualifying teams as per the criteria above.

If such a situation arises that there are extra slots for another team to participate and no other team can qualify, **additional teams from a university that has reached the maximum number of teams may be given an invite.**

The organizers will accommodate a maximum of twenty (20) teams for the contest.

# On-Site Final Round

<br />
<hr />

The On-Site Final Round will be held in Accenture Ideas Exchange Room, Department of Computer Science, University of the Philippines Diliman, Quezon City.

Each team is required to pay a registration fee amounting to Php 600 to be paid before the On-Site Final Round.

# Contest Environment

<br />
<hr />

The programming languages for the On-Site Final Round will be restricted to the following languages:

- Java (OpenJDK "11.0.4")
  - `javac {filename}`
  - `java -Xss128m -Xmx960m -Xms960m {filename_base}`
- C++ (G++ 7.4.0)

  - `g++ -std=gnu++17 -O3 -o {filename_base}.exe {filename}`
  - `./{filename_base}.exe`

- Python 3.7.0
  - `python3 -m py_compile {filename}`
  - `python3 {filename}`

Note that we can only guarantee that all problems are solvable in C++ and Java.

Each team will be provided a single computer (workstation). Each workstation\*\* will be setup as follows:

- Sublime Text
- Eclipse
- (neo)vim

_\*\*Exact workstation specifications, along with the software versions of the editors installed, will be communicated in email before the On-Site Final Round._

Contestants are allowed to bring reference material for use during the contest proper, according to the following limitations:

- Contain up to 20 pages of reference material, machine printed on single-sided Letter (8x11 inches) or A4 size paper (210x297mm), with pages numbered on the upper right hand corner.
- May contain algorithms, code listings, hints, or any other notes.
- Each team member may have an exact copy of the reference material.
- The document must be in some type of notebook, binder, envelope, or folder with the name of the institution and team on front.

All materials will be checked before the contest proper. The materials will then be placed in the team's designated workstation for the contest proper. Scratch papers and writing materials will be provided by the organizers as needed.

Apart from the approved reference material, no other materials are allowed. Contestants are not allowed to bring any machine readable versions of software or code to the contest area. Electronic devices, such as calculators, handheld gadgets, and smart watches are similarly not allowed.

Contestants are expected to switch of all communication devices and surrender them to their respective coaches for the duration of the contest.

No hardware substitutions will be allowed (that is, teams may not bring their own equipment onto the contest floor). Teams may not substitute keyboards or other peripherals; all teams will use identical equipment, as described above, during the contest.

# Practice Session

<br />
<hr />

Prior to the contest proper, a practice session will be held for one (1) hour, in order for the contestants to be familiar with the contest environment, as well as to address any technical or logistical issues that might arise.

# On-Site Finals Contest Proper

<br />
<hr />

The contest will have at least eight (8) problems to be solved in the allotted time of five hours. The length of the contest may be altered in the event of unforeseen consequences. Should the contest duration be altered, every attempt will be made to notify contestants in a timely and uniform manner.

Submissions for judging from the teams are called runs. Submissions will be handled using the programming contest management system DOMjudge. Each run will be judged by the judges as either accepted or rejected, using machines configured in the same way as the machines used by contestants, and the team will be notified of the results. A rejected run will be reported as one of the following:

- compilation error (the program failed to compile)
  - includes compile time limit exceeded errors,
  - includes compile memory limit exceeded errors,
- runtime error (program terminates improperly during runtime)
  - includes memory limit exceeded errors,
  - includes stack limit exceeded errors,
- time limit exceeded (program runtime exceeds the time limit for the problem),
- wrong answer (output not correct according to the problem checker/grader), or
  - includes presentation errors (minimal errors in formatting, such as extra spaces)

Teams can also submit clarification requests to the judges using the clarification system made available as part of the contest system.

If the clarification is deemed valid, the judges will send clarification reports to the team who submitted the request. The judges may also send the report to all the participating teams if deemed necessary.

# Scoring

<br />
<hr />

Teams are ranked according to the number of problems solved. Teams with the same number of problems solved are then ranked according to the least total time. The total time is the sum of time consumed for each problem solved.

If a tie still exists, teams will be ranked according to the time of the first accepted run.

The time consumed for a solved problem is the time elapsed from the beginning of the contest to the submittal of the accepted run, with an additional twenty (20) minutes for every rejected run for that problem (excluding compilation errors). There is no time consumed for a problem that is not solved. A live scoreboard will be available for both the contestants and the coaches. The scoreboard will be frozen one (1) hour before the conclusion of the contest.

# Disqualification

<br />
<hr />

1. **Undermining the legitimacy of the contest.** Teams may be disqualified if the organizing committee reasonably believes that they have attempted to undermine the legitimacy of the competition, by engaging in activities including (but not limited to):

   1. Providing false information about themselves during registration or concerning their eligibility.
   2. Breaching or refusing to comply with the rules.
   3. Sharing or using from others, whether intentionally or unintentionally, any information about a task, including its content or solution, before the end of a round.
   4. Displaying behavior considered to be disruptive, unethical, or unsportsmanlike.

2. **Failing to reply.** Teams may be disqualified if they fail to respond to any request for information from the organizing committee related to Algolympics within seven days of our request or a given deadline.
3. **Change of username/team name.** The team must not change their Codeforces username/team name at any point in the contest period (from registration until the end of the on-site final round). Any username/team name change is grounds for disqualification.
4. **Change of Codeforces team.** The team members that make up the Codeforces team must not change for the duration of the competition. Any change in team composition is grounds for immediate disqualification.
5. **Reporting possible cases.** Any harassment, cheating, or violation of these terms may be reported by email to algolympics@upacm.net.

# Awards

<br />
<hr />

Certificates and souvenirs will be given to all the participants while monetary prizes will be given to the top three (3) teams, which are as follows:

- Champion team: Php 12,000
- First runner-up team: Php 9,000
- Second runner-up team: Php 6,000

# Changes to the Rules

<br />
<hr />

Mechanics are subject to change. Such changes will be communicated to all registered participants in a timely manner.
