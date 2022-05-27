py -m venv foo
call foo\scripts\activate.bat
py -m pip install -q -U pip
pip install -q tensorflow
pip install -q git+https://github.com/tensorflow/docs
git clone https://github.com/tensorflow/tensorflow
py tensorflow\tensorflow\tools\docs\generate2.py --output_dir=src