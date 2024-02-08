output "aws_iam_role" {
  value = aws_iam_role.role.arn
}

output "aws_ecr_repository_url" {
  value = aws_ecr_repository.repo.repository_url
}