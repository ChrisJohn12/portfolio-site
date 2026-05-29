#!/usr/bin/env python3
from PIL import Image
import os
from glob import glob

folder='public/assets/shipdeez'
paths=glob(os.path.join(folder,'*.png'))
print('Found',len(paths),'pngs in',folder)
for p in sorted(paths):
    img=Image.open(p).convert('RGBA')
    pix=img.load()
    W,H=img.size
    top=0
    bottom=H-1
    left=0
    right=W-1
    # find top
    for y in range(H):
        for x in range(W):
            r,g,b,a=pix[x,y]
            if a>0 and (r<250 or g<250 or b<250):
                top=y
                raise_top=True
                break
        else:
            continue
        break
    # find bottom
    for y in range(H-1, -1, -1):
        for x in range(W):
            r,g,b,a=pix[x,y]
            if a>0 and (r<250 or g<250 or b<250):
                bottom=y
                break
        else:
            continue
        break
    # find left
    for x in range(W):
        for y in range(H):
            r,g,b,a=pix[x,y]
            if a>0 and (r<250 or g<250 or b<250):
                left=x
                break
        else:
            continue
        break
    # find right
    for x in range(W-1, -1, -1):
        for y in range(H):
            r,g,b,a=pix[x,y]
            if a>0 and (r<250 or g<250 or b<250):
                right=x
                break
        else:
            continue
        break
    bbox=(left,top,right+1,bottom+1)
    if bbox[0]>=bbox[2] or bbox[1]>=bbox[3]:
        print('No crop needed for',os.path.basename(p))
        continue
    backup=p+'.orig.png'
    if not os.path.exists(backup):
        os.rename(p, backup)
    im_trim=Image.open(backup).crop(bbox)
    im_trim.save(p)
    print('Trimmed',os.path.basename(p), 'from', (W,H), 'to', im_trim.size)
print('Done')
