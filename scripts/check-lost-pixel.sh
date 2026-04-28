#!/bin/bash
# check-lost-pixel.sh

DIFF_COUNT=$(find .lostpixel/difference -type f | wc -l)

if [ $DIFF_COUNT -gt 0 ]; then
  echo "❌ Найдено визуальных различий: $DIFF_COUNT"
  exit 1
else
  echo "✅ Визуальные регрессии не обнаружены."
  exit 0
fi
