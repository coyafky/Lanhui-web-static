#!/usr/bin/env python3
"""文案极限词扫描器。用法: python3 scan.py <路径或文件...>"""
import sys, os, re

FORBIDDEN = [
    # —— 极限词（广告法第九条）——
    "最佳","最强","最先","最好","最便宜","最先进","最专业","最优质","最高级",
    "第一品牌","全国第一","行业第一","销量第一","唯一","唯一指定","独家首创",
    "顶级","顶尖","极品","极致工艺",
    "独创","首创","开创性",
    "进口同款","原厂同款","原装同款",
    "国家级","世界级","全球领先","行业领先","遥遥领先","领先水平",
    "史无前例","空前绝后","百分百有效","绝对不","绝对领先",
]
# 中性用法白名单：含这些模式的「最」「第一」不报警
NEUTRAL_PATTERNS = [
    r"第[一二三四五六七八九十]+[步章节部分类点]",   # 第一步/第一章 —— 序数词
    r"最后更新|最后编辑|最近更新",                  # 时间表述
    r"最容易|最常见|最大|最小|最长|最短",           # 客观程度描述(物理/频率)，非品质吹嘘
    r"最终",                                        # 最终效果/最终选择
    r"最先被|最先接触|最先受",                      # 物理接触顺序
    r"最好(验|先|是)?(一下|还是|先)",                # "最好验一下" —— 建议语气，非品质吹嘘
    r"改之前最好|最好先",                            # 同上
]

# 「最」单独出现时多为极限词，但也可能是"最近更新"等中性用法 → 单独列出人工复核
SINGLE_CHAR = ["最"]

DISCLAIMER_HINT = ["以门店实测为准","以实车为准","仅供参考","具体以","以实际为准"]
PRICE_PATTERN = re.compile(r"(?:¥|￥|\bRMB\s?)\s?\d|\d+\s?元")

def scan_file(path):
    try:
        txt = open(path, encoding="utf-8").read()
    except Exception:
        return []
    hits = []
    lines = txt.split("\n")
    for i, line in enumerate(lines, 1):
        # 中性用法跳过
        if any(re.search(p, line) for p in NEUTRAL_PATTERNS):
            continue
        for w in FORBIDDEN:
            if w in line:
                hits.append((i, w, line.strip()[:100]))
    return hits

def main():
    targets = sys.argv[1:]
    if not targets:
        print(__doc__); return 2
    files = []
    for t in targets:
        if os.path.isfile(t):
            files.append(t)
        elif os.path.isdir(t):
            for dp, dn, fn in os.walk(t):
                if any(x in dp for x in ['.git','node_modules','.next','out']): continue
                for f in fn:
                    if f.endswith(('.md','.mdx','.ts','.tsx')):
                        files.append(os.path.join(dp,f))
    total = 0
    for f in files:
        hits = scan_file(f)
        if hits:
            total += len(hits)
            print(f"\n❌ {f}  ({len(hits)} 处)")
            for ln, w, ctx in hits[:10]:
                print(f"   L{ln}  [{w}]  {ctx}")
            if len(hits) > 10:
                print(f"   ... 另 {len(hits)-10} 处")
    if total == 0:
        print("✅ 未发现极限词")
        return 0
    print(f"\n共 {total} 处需处理。参考 rules/content-copy.md")
    return 1

if __name__ == "__main__":
    sys.exit(main())
