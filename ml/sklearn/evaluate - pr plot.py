from sklearn.metrics import precision_recall_curve
# https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html

precision, recall, _ = precision_recall_curve(y_true, y_pred)

lw = 2
plt.plot(recall, precision, lw=lw, color='darkorange', label='Precision-Recall curve')
plt.plot([0,1], [0.5,0.5],    lw=lw, color='navy',       label='Random classifier', linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curve')
plt.legend()
plt.show()
