a=Hash.new [];ARGF.each{|l|l.chomp!;a[l.chars.sort]+=[l]}
loop{w=a[a.keys.sample][b=0]
(0..999).each{(print w.upcase+' ';sleep 0.1)if w!=b
b=w;w=w.dup
l=[*'a'..'z'].sample
r=rand 5
r<3?w+=l:w[rand w.size]=r<4?'':l
w=a[w.chars.sort]&.sample||b}
puts;puts}
