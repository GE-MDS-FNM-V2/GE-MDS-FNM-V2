[Go back home](index.md).

# Measurements and Metrics
We plan to collect the following measurements:

* Total story points completed per sprint (i.e., the sprint velocity)
* Total story points committed to per sprint
* Total Product Backlog items (PBIs) completed per sprint
* Hours worked by the team per week for each member
* (Once applicable) total tests run during builds
* (Once applicable) total code coverage per each source code file tested during builds; this should be collected both as a percentage and as a numerical value (i.e., no. of lines covered by tests)

From these measurements, we derive the following metrics:

1. PBI Density, which is the calculation (no. of story points completed) / (no. of PBIs completed). This will give us an idea of how "dense" our PBIs are on average - how complex they are and how much work we typically think they'll take. The most apparent use case for this metric is during grooming sessions, where we reassess the backlog. If we notice that our PBIs seem disproportionately more or less dense than expected, we can assess remaining PBIs to determine if they need to be broken up or combined.
2. Sprint Velocity, which is simply the total story points completed per sprint. Velocity on its own is a useful metric for determining team capacity per sprint, and will help us better evaluate our maximal workload during a single sprint over the course of this project.
3. Expected vs. Actual Completed Story Points, which is simply the difference between the total completed story points per sprint and the total committed story points per sprint divided by the total completed story points. This will help us keep an eye on how reliable our expectations are for capacity and project goals.
4. Test Coverage per Source Code File, which is the calculation (no. of lines covered by tests) / (no. of tests covering the source code file). This metric will let us know how complex our tests are, and thus whether we need to refactor them. A crucial aspect of writing tests is to make them *simple* - making sure they only test one thing and in only one respect. Knowing average code coverage per test can help us assess this and determine what we need to do next. This can also help us find areas of code that need refactoring. For example, if a specific source code file has a lot of tests covering it, that could be a sign of blobs, spaghetti code, or numerous other problems.