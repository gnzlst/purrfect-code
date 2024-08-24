// Array where 0=North, 1=South, 2=East, 3=West
[0, 0, 1, 1, 1, 1, 3, 0, 0, 3, 2, 2, 2, 2].forEach((b) => window["move" + ["North", "South", "East", "West"][b]]()) + activateTeleporter()
