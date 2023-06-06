from openpyxl import Workbook

def generate_large_sheet(no_of_rows):
    # Create a new workbook and select the active sheet
    workbook = Workbook()
    sheet = workbook.active

    # Add headers to the sheet
    headers = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5',
               'Column 6', 'Column 7', 'Column 8', 'Column 9', 'Column 10']
    sheet.append(headers)

    # Generate rows with sample data
    for i in range(no_of_rows):
        data = [f'Row {i+1}, Column {j+1}' for j in range(10)]
        sheet.append(data)

    # Save the workbook to a file
    filename = str(no_of_rows) + '_rows_10_columns_sheet.xlsx'
    workbook.save(filename)
    print(f'{filename} generated successfully.')


generate_large_sheet(250_000)
