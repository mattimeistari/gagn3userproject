import sqlite3


# Create placeholder
def placeholderText():
    print("WTF!")
    return


# Connect users.db
conn = sqlite3.connect("./db/users.db")

# Create a cursor object
cursor = conn.cursor()

# Prompt the user to print out the users
print("Do you wanna print all the peopls? (Y/N)")
choice = input("\nAnswer here:")

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
            f"Email: {row[3]} Flag value: {row[4]}\n"
        )

# If he chooses not to, run option 2, which is placeholder
elif choice.lower() == "n":
    placeholderText()

# If user fails to inster y/n
else:
    print("User Failed to follow instructions")

# End the forrit
cursor.close()
conn.close()

# Closing message
print("######## FORRIT END ########")
