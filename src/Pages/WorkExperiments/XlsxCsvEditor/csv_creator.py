import csv


def csv_generator_for_rows(no_of_rows):

    columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8', 'Column 9',
               'Column 10']
    rows = []

    # Generate the rows
    for i in range(1, no_of_rows + 1):
        row = [f'Row {i}'] + [f'Value {i}-{j}' for j in range(1, 11)]
        rows.append(row)

    # Write the CSV file
    filename = str(no_of_rows) + '_rows_10_columns_CSV.csv'
    with open(filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)

        # Write the header
        writer.writerow(columns)

        # Write the rows
        writer.writerows(rows)

    print(f'{filename} generated successfully.')


csv_generator_for_rows(25_000)
csv_generator_for_rows(10_000)
csv_generator_for_rows(50_000)
csv_generator_for_rows(100_000)
csv_generator_for_rows(250_000)
csv_generator_for_rows(500_000)
csv_generator_for_rows(1_000_000)
