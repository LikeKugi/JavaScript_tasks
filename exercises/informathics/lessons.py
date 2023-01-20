START_HOURS = 9
START_MINUTES = 0


def get_time(count):
    small_breaks = count // 2
    big_breaks = (count - 1) // 2

    time_studying = count * 45 + small_breaks * 5 + big_breaks * 15

    hours = START_HOURS + time_studying // 60
    minutes = START_MINUTES + time_studying % 60

    print(f'{hours} {minutes:02}')

if __name__ == '__main__':
    i = int(input())
    get_time(i)
