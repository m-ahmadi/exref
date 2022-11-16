import argparse
# https://docs.python.org/dev/library/argparse.html

parser = argparse.ArgumentParser()

parser.add_argument(
	action='store|store_const|store_true|append|append_const|count|help|version',
	choices=[]|range(),Container,
	const=<value>,
	default=None,
	dest='',
	help='',
	metavar='',
	nargs=0|'?|*|+'|argparse.REMAINDER,
	required=False,
	type=int|float|argparse.FileType('w')|fn,
	# https://docs.python.org/dev/library/argparse.html#the-add-argument-method
)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

parser = argparse.ArgumentParser(description='desc')
parser.add_argument('-f', '--foo', action='store', default='7')
args = parser.parse_args()
#       =>  args.foo = '7'
# -f 4  =>  args.foo = '4'

parser = argparse.ArgumentParser(description='desc')
parser.add_argument('integers', metavar='N', type=int, nargs='+', help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const', const=sum, default=max, help='sum the integers (default: find the max)')
args = parser.parse_args()
print(args.accumulate(args.integers))
