import { PrismaClient } from "@prisma/client";

export async function sportsFactory() {

    const prisma = new PrismaClient();

    const listOfSports: string[] = ["Basketball",
        "Soccer",
        "Football",
        "Volleyball",
        "Ultimate Frisbee",
        "Golf",
        "Pickleball",
        "Tennis",
        "Hockey",
        "Running",
        "Kickball",
        "Rugby",
        "Softball",
        "Swimming",
        "Yoga",
        "Handball",
        "Soccer Beach",
        "Volleyball Beach",
        "Altinha",
        "Fencing",
        "Slack Line",
        "Cycling Urban",
        "Skateboarding",
        "Roller Skate",
        "Ice Skating",
        "Bowling",
        "Other"
    ];

    const sports: { name: string }[] = [];
    for (const sport of listOfSports) {
        sports.push({
            name: sport
        })
    }

    await prisma.sport.createMany({ data: sports, skipDuplicates: true })

    return;
}

