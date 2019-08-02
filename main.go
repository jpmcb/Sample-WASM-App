package main

import (
	"time"
)

func main() {
	num := 1
	for true {
		time.Sleep(2 * time.Second)
		println(num)
		num = num + num
	}
}
