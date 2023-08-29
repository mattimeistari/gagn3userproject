import sqlite3


def doNothing():
    print("WTF!")
    return


# Connect users.db
conn = sqlite3.connect("./db/users.db")

# Create a cursor object
cursor = conn.cursor()

# Prompt the user to print out the users
print("Do you wanna print all the peopls (Y/N)")
choice = input("Answer here:")

# If the user chooses to print the users
if choice.lower() == "y":
    # Execute SELECT statement
    cursor.execute(
        "SELECT userName, firstName, lastName, email, flags "
        "FROM users;"
    )

    # Fetch all the rows and display the names
    rows = cursor.fetchall()
    for row in rows:
        print(
            f"Name: {row[0]}, Full name: {row[1]} {row[2]}, "
            f"Email: {row[3]} Flag value: {row[4]}"
        )

if choice.lower() == "n":
    doNothing()

cursor.close()
conn.close()
print()
print("######## FORRIT END ########")
