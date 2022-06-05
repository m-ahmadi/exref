import tensorflow_decision_forests as tfdf # no windows support june 2022
import pandas as pd

train_df = pd.read_csv('project/train.csv')
test_df = pd.read_csv('project/test.csv')

train_ds = tfdf.keras.pd_dataframe_to_tf_dataset(train_df, label='my_label')
test_ds = tfdf.keras.pd_dataframe_to_tf_dataset(test_df, label='my_label')

model = tfdf.keras.RandomForestModel()
model.fit(train_ds)

model.summary()

model.evaluate(test_ds)

model.save('project/model')