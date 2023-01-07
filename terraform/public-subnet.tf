resource "aws_subnet" "public" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.0.0/24"
    availability_zone = "ap-northeast-2a"

    tags = {
        Names = "public_subnet"
    } 
}