import easyocr
from PIL import Image
import matplotlib.pyplot as plt


def read_bound(pth, reader):
    return reader.readtext(pth)

def draw_boxes(image, bounds, color='yellow', width=2):
    draw = ImageDraw.Draw(image)
    for bound in bounds:
        p0, p1, p2, p3 = bound[0]
        draw.line([*p0, *p1, *p2, *p3, *p0], fill=color, width=width)
    return image

if __name__ == "__main__":
    reader = easyocr.Reader(['en'])
    pth = 'images/img.jpeg'
    img = Image.open('images/img.jpeg')
    bounds = read_bound(pth)
    draw_boxes(img, bounds)
    print(bounds[1])